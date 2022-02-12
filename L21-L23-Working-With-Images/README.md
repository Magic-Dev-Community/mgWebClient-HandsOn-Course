# mgWebClient-HandsOn-Course
## Lesson 21-23 - Working With Images


Notes:

Lesson 21:

Don't copy over WorkoutsList.component.html, only add a <td></td>  pair as follows:

```
<td>
    <button class="btn btn-success mr-2 ml-2 editBt"
    magic="ShowImages"
    [rowId]="row.rowId"
    >
    ...
</button>
</td>
```

For ease of use, I made both the IIS virtual directory Img and the logical name Images point to:

```
C:\projects\WorkoutImages\
```

File select and upload work however - at least in my version - it's not pretty - this iteration, I don't care I'll address look and feel another time.


TODO: Complete Lessons 22,23