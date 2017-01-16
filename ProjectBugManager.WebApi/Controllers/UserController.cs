using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ProjectBugManager.IService;

namespace ProjectBugManager.WebApi.Controllers
{

    public class UserController
    {
        private readonly IUserService _userService;
        UserController(IUserService userService)
        {
            _userService = userService;
        }

    }
}