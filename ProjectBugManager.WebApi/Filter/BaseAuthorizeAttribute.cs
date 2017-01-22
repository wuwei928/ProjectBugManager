using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http.Headers;
using System.Security.Principal;
using System.Text;
using System.Threading;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;
using ProjectBugManager.Common;
using ProjectBugManager.WebApi.Models;

namespace ProjectBugManager.WebApi.Filter
{
    public class BaseAuthorizeAttribute : AuthorizeAttribute
    {
        public override void OnAuthorization(HttpActionContext actionContext)
        {
            var authorization = actionContext.Request.Headers.Authorization;
            if (!CheckAuthorizeHeaders(authorization))
            {
                throw new UnauthorizedAccessException();
            }


            var encoding = Encoding.GetEncoding("iso-8859-1");
            var anthorization = encoding.GetString(Convert.FromBase64String(authorization.Parameter));
            var user = anthorization.Split(':');
            var userName = user[0];
            var password = user[1];
            if (!Validate(userName, password))
            {
                throw new UnauthorizedAccessException();
            }
            var identity = new GenericIdentity(userName);
            var genericPrincipal = new GenericPrincipal(identity, null);
            Thread.CurrentPrincipal = genericPrincipal;
            if (HttpContext.Current != null)
            {
                HttpContext.Current.User = genericPrincipal;
            }
            base.OnAuthorization(actionContext);
        }

        private bool CheckAuthorizeHeaders(AuthenticationHeaderValue headerValue)
        {
            return !string.IsNullOrEmpty(headerValue?.Parameter)
                && headerValue?.Parameter != "null"
                && headerValue.Parameter != "undefined"
                && headerValue.Scheme.Equals("basic", StringComparison.OrdinalIgnoreCase);
        }

        public bool Validate(string userName, string password)
        {
            var user = CacheManager.Get<UserViewModel>(userName);
            if (user == null)
            {
                throw new UnauthorizedAccessException();
            }
            var encoding = Encoding.GetEncoding("iso-8859-1");
            var token = encoding.GetBytes(userName + ":" + password);
            return user.Authorization != null && user.Authorization.Equals(Convert.ToBase64String(token), StringComparison.OrdinalIgnoreCase);
        }
    }
}