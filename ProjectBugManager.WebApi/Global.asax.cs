using System.Web.Http;
using System.Web.Http.Dispatcher;
using System.Web.Http.Filters;
using ProjectBugManager.WebApi.Installer;

namespace ProjectBugManager.WebApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfiguration.RegisterFilterConfiguration(GlobalConfiguration.Configuration.Filters);
            WindsorBootstrapper.Initialize();
            GlobalConfiguration.Configuration.Services.Replace(typeof(IHttpControllerActivator), new WindsorCompositionRoot(WindsorBootstrapper.Container));
        }
    }
}
