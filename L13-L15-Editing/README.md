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


 TODO: Continue and Complete lessons 14,15 for this section