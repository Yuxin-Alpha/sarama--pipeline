while True:
  action_str = input("please enter a number: ")
  print("You choosed Number:[%s]" %action_str)

  if action_str in [1, 2, 3]:
    if action_str == 1:
      pass
    elif action_str == 2:
      pass
    else:
      pass
  elif action_str == 0:
    print("See you again")
    break
  else:
    print("Please enter a correct number")