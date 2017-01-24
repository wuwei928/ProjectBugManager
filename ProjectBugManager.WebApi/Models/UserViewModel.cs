using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace ProjectBugManager.WebApi.Models
{
    public class UserViewModel
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Principal { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Authorization { get; set; }
    }
}