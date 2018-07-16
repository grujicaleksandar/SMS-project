import {Pipe, PipeTransform} from '@angular/core';
import {Student} from '../Student';


@Pipe({
  name: 'studentFilter'
})
export class StudentFilterPipe implements PipeTransform {

  transform(value: Student[], filterBy: string): Student[] {

    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((student: Student) =>
      student.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;

  }

}
