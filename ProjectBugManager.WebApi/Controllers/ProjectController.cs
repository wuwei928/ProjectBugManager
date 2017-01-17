using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using ProjectBugManager.DomainModel;
using ProjectBugManager.IService;
using ProjectBugManager.WebApi.Models;

namespace ProjectBugManager.WebApi.Controllers
{
    [RoutePrefix("api/projects")]
    public class ProjectController : ApiController
    {
        private readonly IProjectService _projectService;

        public ProjectController(IProjectService projectService)
        {
            _projectService = projectService;
        }
        [Route("")]
        [HttpGet]
        public List<ProjectViewModel> GetProjects()
        {

            var projects = _projectService.Projects().Select(x => new ProjectViewModel
            {
                Id = x.Id.ToString(),
                Name = x.Name,
                Remark = x.Remark
            }).ToList();

            return projects;
        }

        [Route("")]
        [HttpPost]
        public void CreateProject(ProjectViewModel projectDodel)
        {
            var project = new Project
            {
                Id = Guid.NewGuid(),
                Name = projectDodel.Name,
                Remark = projectDodel.Remark
            };
            _projectService.Create(project);
        }

        [Route("")]
        [HttpPut]
        public void EditProject(ProjectViewModel projectDodel)
        {
            var project = new Project
            {
                Id = Guid.Parse(projectDodel.Id),
                Name = projectDodel.Name,
                Remark = projectDodel.Remark
            };
            _projectService.Update(project);
        }

        [Route("{id}")]
        [HttpGet]
        public ProjectViewModel GetProjectById(string id)
        {
            var projectId = Guid.Parse(id);
            var project = _projectService.GetProjectById(projectId);
            return new ProjectViewModel
            {
                Id = id,
                Name = project.Name,
                Remark = project.Remark
            };
        }

        [Route("{id}")]
        [HttpDelete]
        public void DeleteProject(string id)
        {
            var projectId = Guid.Parse(id);
            _projectService.Delete(projectId);
        }

    }
}