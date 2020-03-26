using Curbside.Shared;
using Microsoft.EntityFrameworkCore;

namespace Curbside.Server
{
    public class CurbsideContext : DbContext
    {
        public CurbsideContext()
        {
        }

        public CurbsideContext(DbContextOptions options)
            : base(options)
        {
        }
        public DbSet<Business> Businesses { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
    => options.UseSqlite("Data Source=curbside.db");
    }
}
