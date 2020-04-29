import * as React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import { SafeAreaView } from 'react-native';

const NewExpense = () =>
    <SafeAreaView>
          <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={new Date()}
                    mode={'date'}
                    is24Hour={true}
                    display="default"

                  />
    </SafeAreaView>;

export default NewExpense;