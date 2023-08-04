import { Subject } from "rxjs"

export class SubjectManager {
	subject$ = new Subject()
	getSubject = () => this.subject$.asObservable()
	setSubject = (value: any) => this.subject$.next(value)
}
