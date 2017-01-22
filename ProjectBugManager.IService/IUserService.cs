using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectBugManager.DomainModel;

namespace ProjectBugManager.IService
{
    public interface IUserService
    {
        List<User> Users();
        User GetUserById(Guid id);
        User LoginUser(string userName, string password);
        void Create(User user);
        void Update(User user);
        void Delete(Guid id);
    }
}
