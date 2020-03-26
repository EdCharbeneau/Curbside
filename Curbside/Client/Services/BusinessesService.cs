using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Curbside.Shared;
using Microsoft.AspNetCore.Components;

namespace Curbside.Services
{
    public class BusinessesService
    {
        [Inject]
        private HttpClient Http { get; set; }

        public BusinessesService(HttpClient client)
        {
            Http = client;
        }

        public async Task<List<Business>> GetBusinessesListAsync()
        {
            var data = await Http.GetJsonAsync<List<Business>>("Businesses");
            return data;
        }

        public async Task UpdateForecastAsync(Business businessToUpdate)
        {
            await Http.PutJsonAsync("Businesses", businessToUpdate);
        }

        public async Task DeleteForecastAsync(Business businessToRemove)
        {
            await Http.DeleteAsync($"Businesses/{businessToRemove.Id}");
        }

        public async Task InsertForecastAsync(Business businessToInsert)
        {
            await Http.PostJsonAsync("Businesses", businessToInsert);
        }
    }
}