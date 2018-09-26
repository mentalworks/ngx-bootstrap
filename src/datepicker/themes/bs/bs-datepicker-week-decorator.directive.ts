import { ChangeDetectionStrategy, Component, Directive, Input } from '@angular/core';
import { DatepickerRenderOptions, DayViewModel, WeekViewModel } from '../../models';
import { BsDatepickerConfig } from '../../bs-datepicker.config';

@Directive({
  selector: '[bsDatepickerWeekDecorator]',
  host: {
    '[class.selected]': 'selectedDay ? selectedDay.isSelected : false'
  }
})
export class BsDatepickerWeekDecoratorDirective {
  selectedDay: DayViewModel;
  @Input() options: DatepickerRenderOptions;

  @Input() set week(week: WeekViewModel) {
    if (this.options.weekPicker) {
      this.selectedDay = week.days.find(day => day.isSelected);
    }
  }

}
