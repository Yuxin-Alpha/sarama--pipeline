while True:
  action_str = input("please enter a number: ")
  print("You choosed Number:[%s]" %action_str)

  if action_str in [1, 2, 3]:
    print("666")
  elif action_str == 0:
    print("See you again")
    break
  else:
    print("Please enter a correct number")