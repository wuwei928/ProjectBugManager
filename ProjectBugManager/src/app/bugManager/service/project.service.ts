import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Project } from '../model/projectModel';

@Injectable()
export class ProjectService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  private projectUrl = 'http://localhost:42833/api/projects';

  constructor(private http: Http) { }

  getProjects(): Promise<Project[]> {
    return this.http.get(this.projectUrl)
      .toPromise()
      .then(function (response) {
        return response.json() as Project[];
      })
      .catch(this.handleError)
  }

  getProjectById(id: string): Promise<Project> {
    const url = this.projectUrl + '/' + id;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(project => project.json());
  }

  deleteProject(id: string): Promise<void> {
    const url = this.projectUrl + '/' + id;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }

  createProject(project:Project): Promise<string> {
    return this.http.post(this.projectUrl, JSON.stringify(project), { headers: this.headers })
      .toPromise()
      .then(() => name)
      .catch(this.handleError);
  }

  updateProject(project: Project): Promise<Project> {
    return this.http.put(this.projectUrl, JSON.stringify(project), { headers: this.headers })
      .toPromise()
      .then(() => project)
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}