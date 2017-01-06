using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectBugManager.DomainModel;

namespace ProjectBugManager.IService
{
    public interface IProjectService
    {
        List<Project> Projects();
        Project GetProjectById(Guid id);
        void Create(Project project);
        void Update(Project project);
        void Delete(Guid id);
    }
}
