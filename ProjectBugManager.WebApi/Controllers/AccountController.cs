using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Http;
using ProjectBugManager.Common;
using ProjectBugManager.DomainModel;
using ProjectBugManager.IService;
using ProjectBugManager.WebApi.Models;

namespace ProjectBugManager.WebApi.Controllers
{
    [RoutePrefix("api/account")]
    public class AccountController : ApiController
    {
        private readonly IUserService _userService;

        public AccountController(IUserService userService)
        {
            _userService = userService;
        }

        [Route("")]
        [HttpPost]
        public UserViewModel Login(UserViewModel usermoModel)
        {
            var user = _userService.LoginUser(usermoModel.UserName, usermoModel.Password);

            if (user == null)
            {
                throw new Exception("User name or password is error!");
            }

            var encoding = Encoding.GetEncoding("iso-8859-1");
            var token = Convert.ToBase64String(encoding.GetBytes(usermoModel.UserName + ":" + usermoModel.Password));

            var userViewModel = new UserViewModel
            {
                UserName = user.UserName,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Principal = user.Principal,
                Authorization = token
            };
            CacheManager.Add(usermoModel.UserName, userViewModel);
            return userViewModel;
        }

    }
}