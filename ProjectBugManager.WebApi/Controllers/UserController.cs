using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using ProjectBugManager.DomainModel;
using ProjectBugManager.IService;
using ProjectBugManager.WebApi.Filter;
using ProjectBugManager.WebApi.Models;

namespace ProjectBugManager.WebApi.Controllers
{
    [RoutePrefix("api/users")]
    [BaseAuthorizeAttribute]
    public class UserController : ApiController
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [Route("")]
        [HttpGet]
        public List<UserViewModel> GeUsers()
        {
            var users = _userService.Users().Select(x => new UserViewModel
            {
                Id = x.Id.ToString(),
                FirstName = x.FirstName,
                LastName = x.LastName,
                Principal = x.Principal,
                UserName = x.UserName
            }).ToList();
   
            return users;
        }

        [Route("")]
        [HttpPost]
        public UserViewModel AddUsers(UserViewModel userModel)
        {
            var user = new User
            {
                Id = Guid.NewGuid(),
                FirstName = userModel.FirstName,
                LastName = userModel.LastName,
                Principal = userModel.Principal,
                UserName = userModel.UserName
            };
            _userService.Create(user);

            return userModel;
        }

        [Route("{id}")]
        [HttpGet]
        public UserViewModel GetById(string id)
        {
            var userId = Guid.Parse(id);
            var user = _userService.GetUserById(userId);
            return new UserViewModel
            {
                Id = user.Id.ToString(),
                FirstName = user.FirstName,
                LastName = user.LastName,
                Principal = user.Principal,
                UserName = user.UserName
            };
        }

        [Route("")]
        [HttpPut]
        public UserViewModel EditUsers(UserViewModel userModel)
        {
            var user = new User
            {
                Id = Guid.Parse(userModel.Id),
                FirstName = userModel.FirstName,
                LastName = userModel.LastName,
                Principal = userModel.Principal,
                UserName = userModel.UserName
            };
            _userService.Update(user);

            return userModel;
        }

        [Route("{id}")]
        [HttpDelete]
        public void DeleteUser(string id)
        {
            var userId = Guid.Parse(id);
            _userService.Delete(userId);
        }
    }
}