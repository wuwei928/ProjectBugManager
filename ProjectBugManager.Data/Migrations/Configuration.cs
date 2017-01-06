using ProjectBugManager.DomainModel;

namespace ProjectBugManager.Data.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ProjectBugManager.Data.BugManagerDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(ProjectBugManager.Data.BugManagerDbContext context)
        {
            if (context.Projects.Any()) return;
            context.Projects.AddOrUpdate(
                 new Project
                 {
                     Id = Guid.NewGuid(),
                     Name = "Butler",
                     Remark = "test project"
                 }
            );
            context.SaveChanges();
        }
    }
}
