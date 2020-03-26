using Curbside.Shared;
using System.Collections.Generic;

namespace Curbside.Services
{
    public class SpinnerState
    {
        public IEnumerable<Business> SelectedBusinesses { get; set; } = new List<Business>();

    }
}
