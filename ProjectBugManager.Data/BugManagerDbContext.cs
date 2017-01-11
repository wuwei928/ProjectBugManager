using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectBugManager.Data.Migrations;
using ProjectBugManager.DomainModel;

namespace ProjectBugManager.Data
{
    public class BugManagerDbContext : DbContext
    {
        public BugManagerDbContext() : base("name=BugManagerConnection")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<BugManagerDbContext, Configuration>());
        }

        public DbSet<Project> Projects { get; set; }
        public DbSet<User> Users { get; set; } 

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
        }
    }
}
