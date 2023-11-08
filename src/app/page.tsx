import Welcome from '@/components/home/Welcome';
import Form from '@/components/form/Form';
import classes from './page.module.css'
import { muscleInterface } from '@/lib/interfaces';
import { getMuscleList } from '@/lib/fetchers';

const HomePage = async () => {
  const muscleList: muscleInterface[] = await getMuscleList();

  const sortedMuscleList = muscleList
    .sort((a: { name: string; }, b: { name: string; }) => a.name.localeCompare(b.name));

  return <div className={classes.home}>
    <Welcome />
    <Form muscleList={sortedMuscleList} />
  </div>
}

export default HomePage;