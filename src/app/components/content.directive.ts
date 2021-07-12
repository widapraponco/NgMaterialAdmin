import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChartDashboardComponent } from '../dashboard/contents/chart/chart.component';
import { TableProjectComponent } from '../dashboard/contents/table-project/table-project.component';
import { TableUserComponent } from '../dashboard/contents/table-user/table-user.component';
import { TaskDashboardComponent } from '../dashboard/contents/task/task.component';
import { TotalFundedComponent } from '../pages/projects/overview/contents/total-funded.component';
import { TotalInvestComponent } from '../pages/projects/overview/contents/total-invest.component copy';
import { TotalProjectComponent } from '../pages/projects/overview/contents/total-project.component';
import { ViewDetailProjectComponent } from '../pages/projects/view/contents/detail.component';
import { ViewImageProjectComponent } from '../pages/projects/view/contents/image.component';
import { ViewTabProjectComponent } from '../pages/projects/view/contents/tabs.component';
import { Content, ContentConfig } from './content.interface';

const components: { [type: string]: Type<Content> } = {
    dashboardChart: ChartDashboardComponent,
    dashboardUser: TableUserComponent,
    dashboardProject: TableProjectComponent,
    dashboardTask: TaskDashboardComponent,
    projectTotal: TotalProjectComponent,
    projectTotalInvest: TotalInvestComponent,
    projectFunded: TotalFundedComponent,
    viewImage: ViewImageProjectComponent,
    viewDetail: ViewDetailProjectComponent,
    viewTabs: ViewTabProjectComponent
};

@Directive({
  selector: '[dynamic-content]'
})
export class DynamicContentDirective implements Content, OnChanges, OnInit {
    @Input()
    config!: ContentConfig;

  component!: ComponentRef<Content>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnChanges() {
  }

  ngOnInit() {
    // console.log(this.config.type);
    
    if (!components[this.config.name]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.name}).
        Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<Content>(components[this.config.name]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    
    // if (
    //   // this.component.instance instanceof FormSelectComponent || 
    //   // this.component.instance instanceof FormMultiSelectComponent ||
    //   this.component.instance instanceof FormAutocompletetComponent) {

    //   // console.log(this.component);
        
    //   // this.component.instance.options = this.config.selectOption;
    //   // this.component.instance.dataConfig = this.config.selectOption.config;
    //   (<FieldData>this.component.instance).updateData()
    // }
  }
}
