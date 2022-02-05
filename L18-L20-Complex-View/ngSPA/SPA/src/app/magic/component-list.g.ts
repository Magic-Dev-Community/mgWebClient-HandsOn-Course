import { StartProgram as StartProgram_StartProgram } from './Main/StartProgram/StartProgram.component';
import { Login as Login_Login } from './Main/Login/Login.component';
import { Welcome as Welcome_Welcome } from './Main/Welcome/Welcome.component';
import { Logout as Logout_Logout } from './Main/Logout/Logout.component';

export const title = "";

export const magicGenCmpsHash = {               Logout_Logout:Logout_Logout,
                      Welcome_Welcome:Welcome_Welcome,
                      Login_Login:Login_Login,
                      StartProgram_StartProgram:StartProgram_StartProgram,
       
};

export const magicGenComponents = [ Logout_Logout ,  Welcome_Welcome ,  Login_Login ,  StartProgram_StartProgram 
];


export const LazyLoadModulesMap = { Workouts_Workout_List_WorkoutList : { moduleName : 'MagicWorkoutModule',
                                          modulePath : 'src/app/magic/Workout/magic.gen.lib.module'},
  Workouts_Workouts : { moduleName : 'MagicWorkoutModule',
                                          modulePath : 'src/app/magic/Workout/magic.gen.lib.module'},
  ViewAthleteNative_ViewAthleteNative : { moduleName : 'MagicAthleteModule',
                                          modulePath : 'src/app/magic/Athlete/magic.gen.lib.module'},
  ViewAthlete_ViewAthlete : { moduleName : 'MagicAthleteModule',
                                          modulePath : 'src/app/magic/Athlete/magic.gen.lib.module'},
  AthleteList_AthleteList : { moduleName : 'MagicAthleteModule',
                                          modulePath : 'src/app/magic/Athlete/magic.gen.lib.module'},
  CreateAthlete_CreateAthlete : { moduleName : 'MagicAthleteModule',
                                          modulePath : 'src/app/magic/Athlete/magic.gen.lib.module'},
 };