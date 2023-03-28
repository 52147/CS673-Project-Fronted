import React from 'react'

export const Record = () => {
    const dispatch = useDispatch();

    const { history } = useSelector((state) => state.updateForm);
    useEffect(() => {
        console.log("Fetching history...");
        dispatch(FormThunk());
      }, [dispatch]);
      console.log(history);
  return (
    <></>
  )
}
