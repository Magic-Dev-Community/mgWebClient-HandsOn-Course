# mgWebClient-HandsOn-Course
## Lesson 10-12 - Table View


Notes:

Lesson 10:

OK, it says right there "Note: When you copy the following export definition to the clipboard and paste it in a blank file, ensure that there are no blank lines in the beginning of the file." but still, it's easy to miss especially when you use the copy icon to copy the text of the Capital Cities table definition, it has a blank line at the beginning. :-)

Same with capital cities table data in list-national-capitals.csv

Lesson 12:

The code to paste into City3.component.html is wrong and should be:

```html
<div
magic="Table1"
class="table_scrollBar container_border Div-Layout"
infinite-scroll
[infiniteScrollDistance]="2"
[infiniteScrollThrottle]="500"
(scrolled)="tableService.onScrollDown()"
(click)="tableService.onScrollDown()"
[scrollWindow]="false"
>
<ng-container *ngFor="let row of task.Records.list">
   <div class="Div-block"
   *ngIf="mg.ifRowCreated(row) && !mg.isDataviewEmpty()"
   id="row"
   [formGroup]="mg.getFormGroupByRow(row.rowId)"
   [ngClass]="{ 'selected': mg.isRowSelected('Table1', row.rowId)}"
   [class.selected]="tableService.getSelectedRow() === row.rowId"
   (click)="tableService.selectRow(row.rowId)"
   [magicRow]="row?.rowId"
   >
   <label magic="City" [rowId]="row.rowId">
   {{mg.getValue('CapitalCities_City', row.rowId)}}
   </label><BR>
   <label  magic="Country" [rowId]="row.rowId">
   {{mg.getValue('CapitalCities_Country', row.rowId)}}
   </label>
   </div>
</ng-container>
</div>
```