# mgWebClient-HandsOn-Course
## Lesson 13-15 - Editing


Notes:

Lesson 13:

When it came time to create my first Athlete record in the web app, it failed and I received this in the error log:

```
<203119977485877152> 31/01/2022 22:04:23.015     [Error  ] - Create error: Athlete  >> Application: "C:\projects\mgSPA\SPA\", Program: "StartProgram.CreateAthlete.FetchNextID".
 <203119977485877152> 31/01/2022 22:04:23.017     [Error  ] - EndTaskRequest(): Create error: Athlete : FetchNextID database is locked : "StartProgram.CreateAthlete" ("SPA")  (msgid "320"), Program: "Main Program".
 <386024489086951168> 31/01/2022 22:04:23.701     [Error  ] - This session was closed by the server(-197). Application : SPA
```

 I can't step in the same river twice nor go back to recreate it, but I generated a RIA Browse on Athlete table to create the table physically and tried again, and this fixed the problem.


Lesson 14:

Ignore the desire to match the screenshot, the program is called ViewAthlete not AthleteList. You figured it out, remember to add the Route ViewAthlete to the ViewAthlete program in Task Properties/Interface/Route.

There are inconsitencies between the fragments meant pasted and how the ViewAthlete.component.html names fields and how they are named in the generated ViewAthlete.mg.controls.g.ts. My fix was to follow the generated naming conventions and amend the html for example:

```
<!--name start-->
                <ng-container
                    magic="Column12"
                    matColumnDef="Column12"
                >
                    <mat-header-cell class="tabhead" *matHeaderCellDef> Name </mat-header-cell>
                    <mat-cell
                        *matCellDef="let row"
                        magicMark="magicTableRowContainer"
                    >
                    <div
                    style="display: flex; flex-direction: row"
                    *ngIf="mg.ifRowCreated(row)"
                >
                    <div
                        [formGroup]="mg.getFormGroupByRow(row.rowId)"
                        style="display: flex; flex-direction: row"
                    >
                        <div>
                            <mat-form-field *ngIf="mg.isRowInRowEditing(row)">
                                <div>
                                    <input
                                        *ngIf="mg.isRowInRowEditing(row)"
                                        matInput
                                        [magic]="mgc.Athlete_Name"
                                        [rowId]="row.rowId"
                                        [formControlName]="mgc.Athlete_Name"
                                        mgFormat
                                    >
                                    <mgError
                                        [magic]=mgc.Athlete_Name
                                        [rowId]="row.rowId"
                                    > </mgError>
                                </div>
                            </mat-form-field>
                            <label
                                *ngIf="!mg.isRowInRowEditing(row)"
                                [magic]="mgc.Athlete_Name"
                                [rowId]="row.rowId"
                            >
                                {{mg.getValue(mgc.Athlete_Name, row.rowId)
}}
                            </label>
                        </div>
                    </div>
                </div>
                    </mat-cell>
                </ng-container>
                <!--name end-->
```

Lesson 15:

Same holds true for the ViewAthleteNative.component.html template as for the html in Lesson 14.