using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectBugManager.DomainModel
{
    public class User : BaseDomain
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Principal { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
