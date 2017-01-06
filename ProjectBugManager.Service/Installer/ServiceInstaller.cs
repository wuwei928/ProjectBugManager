using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;

namespace ProjectBugManager.Service.Installer
{
    public class ServiceInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Register(
                Classes.FromAssemblyContaining<ProjectService>()
                    .InSameNamespaceAs<ProjectService>()
                    .LifestylePerWebRequest().WithServiceAllInterfaces());
        }
    }
}
