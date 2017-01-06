using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Build.Framework;

namespace ProjectBugManager.DomainModel
{
    public class BaseDomain
    {
        [Required]
        public Guid Id { get; set; }
    }
}
