using System.Web.Http;
using System.Web.Http.Dispatcher;
using ProjectBugManager.WebApi.Installer;

namespace ProjectBugManager.WebApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            WindsorBootstrapper.Initialize();
            GlobalConfiguration.Configuration.Services.Replace(typeof(IHttpControllerActivator), new WindsorCompositionRoot(WindsorBootstrapper.Container));
        }
    }
}
