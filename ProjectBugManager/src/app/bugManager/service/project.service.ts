import { Injectable } from '@angular/core';
import { HttpProxy } from '../common/http.proxy'
import { Observable } from 'rxjs/Observable'

import { Project } from '../model/projectModel';

@Injectable()
export class ProjectService {

  constructor(private http: HttpProxy) { }

  getProjects(): Observable<Project[]> {
    return this.http.get("projects");
  }

  getProjectById(id: string): Observable<Project> {
    const url = "projects" + '/' + id;
    return this.http.get(url)
  }

  deleteProject(id: string): Observable<void> {
    const url = "projects" + '/' + id;;
    return this.http.delete(url);
  }

  createProject(project: Project): Observable<string> {
    return this.http.post("projects", project);

  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put("projects", project);
  }

}