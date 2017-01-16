using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectBugManager.DomainModel;
using ProjectBugManager.IRepository;
using ProjectBugManager.IService;

namespace ProjectBugManager.Service
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public List<User> Users()
        {
            return _userRepository.GetAll();
        }

        public User GetUserById(Guid id)
        {
            return _userRepository.GetById(id);
        }

        public void Create(User user)
        {
            _userRepository.Add(user);
        }

        public void Update(User user)
        {
            _userRepository.Update(user);
        }

        public void Delete(Guid id)
        {
            _userRepository.Delete(id);
        }
    }
}
