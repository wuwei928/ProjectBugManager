using ProjectBugManager.DomainModel;
using ProjectBugManager.IRepository;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace ProjecBugManager.Repository
{
    public class BaseRepository<T> : IBaseRepository<T> where T : BaseDomain
    {
        private readonly IDbContextProvid _dbContextProvid;
        public DbContext DbContext => _dbContextProvid.GetDbContext();

        public BaseRepository(IDbContextProvid dbContextProvid)
        {
            _dbContextProvid = dbContextProvid;
        }

        public void Add(T entity)
        {
            DbContext.Set<T>().Add(entity);
            DbContext.SaveChanges();
        }

        public void Update(T entity)
        {
            var entry = DbContext.Entry(entity);
            DbContext.Set<T>().Attach(entity);
            entry.State=EntityState.Modified;
            DbContext.SaveChanges();
        }

        public void Delete(Guid id)
        {
            var entity = GetById(id);
            DbContext.Set<T>().Remove(entity);
            DbContext.SaveChanges();
        }

        public List<T> GetAll()
        {
            return DbContext.Set<T>().ToList();
        }

        public T GetById(Guid id)
        {
            return DbContext.Set<T>().Find(id);
        }
    }
}
