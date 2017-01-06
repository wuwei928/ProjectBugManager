using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using ProjectBugManager.Api.Models;
using ProjectBugManager.IService;

namespace ProjectBugManager.Api.Controllers
{
    public class ProjectController : ApiController
    {
        private readonly IProjectService _projectService;

        public ProjectController(IProjectService projectService)
        {
            _projectService = projectService;
        }
        [Route("api/projects")]
        [HttpGet]
        public List<ProjectViewModel> GetProjects()
        {
            //return _projectService.Projects().Select(x => new ProjectViewModel
            //{
            //    Name = x.Name,
            //    ReMark = x.Remark
            //}).ToList();
            var projectViewModels = new List<ProjectViewModel>
            {
                new ProjectViewModel
                {
                    Name = "test",
                    ReMark = "test"
                }
            };

            return projectViewModels;
        }
    }
}