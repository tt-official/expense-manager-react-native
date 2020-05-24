import * as React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Input, Button, Icon } from 'react-native-elements';

import { SafeAreaView, TextInput } from 'react-native';
export default function UselessTextInput() {
  const [value, onChangeText] = React.useState('');
  const [isCalendarVisilbe, setCalendarVisible] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const onChange = (event: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setCalendarVisible(false);
    setDate(currentDate);
  };
  const openCalendar = () => setCalendarVisible(true);
  return (
    <SafeAreaView>
      <Input placeholder='Date'
         value={date.toDateString()}
         leftIcon={
          <Icon
            name='date-range'
            size={24}
            color='black'
            onPress={() => openCalendar()}
          />
        }
      />
      <Input placeholder='Description'/>
      <Input placeholder='Category'/>
      <Input placeholder='Amount' leftIcon={{name: 'attach-money' }}/>
      <Button title="Enter"/>
      { isCalendarVisilbe && 
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={new Date()}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      }
    </SafeAreaView>
  );
}


// const NewExpense = () =>
//     <SafeAreaView>
          // <DateTimePicker
          //           testID="dateTimePicker"
          //           timeZoneOffsetInMinutes={0}
          //           value={new Date()}
          //           mode={'date'}
          //           is24Hour={true}
          //           display="default"

          //         />
//     </SafeAreaView>;

// export default NewExpense;