import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image, Pressable, ImageBackground, } from 'react-native';

import { Text, View } from '@/components/Themed';

import React, { useState } from 'react';

const useMyFirstCustomHook = () => {
  const [count, setCount] = useState(0);
  // do some stuff
  return { count, setCount };
};

export default useMyFirstCustomHook;