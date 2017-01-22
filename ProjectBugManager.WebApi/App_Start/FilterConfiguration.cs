using System.Web.Http.Filters;
using ProjectBugManager.WebApi.Filter;

namespace ProjectBugManager.WebApi
{
    public class FilterConfiguration
    {
        public static void RegisterFilterConfiguration(HttpFilterCollection filterCollection)
        {
            filterCollection.Add(new HandExceptionFilterAttribute());
        }
    }
}