using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectBugManager.DomainModel;
using ProjectBugManager.IRepository;

namespace ProjecBugManager.Repository
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(IDbContextProvid dbContextProvid) : base(dbContextProvid)
        {
        }
    }
}
