using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using ProjectBugManager.Data;
using ProjectBugManager.IRepository;

namespace ProjecBugManager.Repository.Installer
{
    public class RepositoryInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Register(Classes.FromThisAssembly().Where(x => x.Name.EndsWith("Repository"))
                .WithService.DefaultInterfaces().LifestylePerWebRequest());
            container.Register(Component.For<IDbContextProvid>().ImplementedBy<DbContextProvid>().LifestylePerWebRequest());
            container.Register(Component.For<BugManagerDbContext>().LifestyleCustom<PerRequestLifeStyleManager>());
        }
    }
}
