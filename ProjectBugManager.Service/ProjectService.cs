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
    public class ProjectService : IProjectService
    {
        private readonly IProjectRepository _projectRepository;
        public ProjectService(IProjectRepository projectRepository)
        {
            _projectRepository = projectRepository;
        }

        public List<Project> Projects()
        {
            return _projectRepository.GetAll();
        }

        public Project GetProjectById(Guid id)
        {
            return _projectRepository.GetById(id);
        }

        public void Create(Project project)
        {
            _projectRepository.Add(project);
        }

        public void Update(Project project)
        {
            _projectRepository.Update(project);
        }

        public void Delete(Guid id)
        {
            _projectRepository.Delete(id);
        }
    }
}
