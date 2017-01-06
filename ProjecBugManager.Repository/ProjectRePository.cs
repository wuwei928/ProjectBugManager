using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectBugManager.DomainModel;
using ProjectBugManager.IRepository;

namespace ProjecBugManager.Repository
{
    public class ProjectRepository : BaseRepository<Project>, IProjectRepository
    {
        public ProjectRepository(IDbContextProvid dbContextProvid) : base(dbContextProvid)
        {
        }
    }
}
