using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Castle.MicroKernel.Registration;
using Castle.Windsor;
using Castle.Windsor.Installer;
using ProjecBugManager.Repository.Installer;
using ProjectBugManager.Service.Installer;

namespace ProjectBugManager.Api.Installer
{
    public static class WindsorBootstrapper
    {
        private static IWindsorContainer _container;

        public static void Initialize()
        {
            _container = new WindsorContainer();
            _container.Install(FromAssembly.This(),
                FromAssembly.Containing<ServiceInstaller>(),
                FromAssembly.Containing<RepositoryInstaller>());
            _container.Register(Component.For<IWindsorContainer>().Instance(_container).LifestyleSingleton());

        }

        public static IWindsorContainer Container
        {
            get
            {
                return _container;
            }
        }
    }
}