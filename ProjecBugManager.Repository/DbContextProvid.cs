using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Castle.Windsor;
using ProjectBugManager.Data;

namespace ProjecBugManager.Repository
{
    public class DbContextProvid : IDbContextProvid
    {
        private readonly IWindsorContainer _container;
        public DbContextProvid(IWindsorContainer container)
        {
            _container = container;
        }

        public DbContext GetDbContext()
        {
            return _container.Resolve<BugManagerDbContext>();
        }
    }
}
