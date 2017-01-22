using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http.Filters;

namespace ProjectBugManager.WebApi.Filter
{
    public class HandExceptionFilterAttribute : ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext actionExecutedContext)
        {
            if (actionExecutedContext.Exception is UnauthorizedAccessException)
            {
                actionExecutedContext.Response = actionExecutedContext.Request.CreateResponse(
                    HttpStatusCode.Unauthorized, new
                    {
                        Code = HttpStatusCode.Unauthorized,
                        Error = actionExecutedContext.Exception.Message
                    });
            }
            else if (actionExecutedContext.Exception is HttpException)
            {
                var e = actionExecutedContext.Exception as HttpException;
                actionExecutedContext.Response =
                    actionExecutedContext.Request.CreateResponse((HttpStatusCode) e.GetHttpCode(), new
                    {
                        Code= (HttpStatusCode)e.GetHttpCode(),
                        Error = actionExecutedContext.Exception.Message
                    });
            }
            else
            {
                actionExecutedContext.Response = actionExecutedContext.Request.CreateResponse(
                    HttpStatusCode.BadRequest, new
                    {
                        Code = HttpStatusCode.BadRequest,
                        Error = actionExecutedContext.Exception.Message
                    });
            }

            base.OnException(actionExecutedContext);
        }
    }
}