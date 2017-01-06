using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectBugManager.DomainModel;

namespace ProjectBugManager.IRepository
{
    public interface IBaseRepository<T> where T : BaseDomain
    {
        void Add(T entity);
        void Update(T entity);
        void Delete(Guid id);
        List<T> GetAll();
        T GetById(Guid id);
    }
}
