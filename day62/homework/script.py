# 1
def should_take_test(grade, marker):
    return grade >= 50 or marker == 'passed'

print(should_take_test(60, 'failed'))

# 2
def can_go_outside(weather_good, enough_time, ready):
    return (weather_good or enough_time) and ready

print(can_go_outside(True, False, True))

# 3
def should_take_step(no_barrier, space_available, signal):
    return (no_barrier and space_available) or signal

print(should_take_step(True, False, True))  

# 4
def should_take_item(item_available, permissible, others_need):
    return (item_available and permissible) or not others_need

print(should_take_item(False, True, False))  

# 5
def should_remember_info(relevant, needed, time_to_process):
    return (relevant or needed) and time_to_process

print(should_remember_info(True, False, True))  

# 6
def should_sleep(late, tired, early_next_day, lights_off):
    return (late and tired) or (early_next_day and lights_off)

print(should_sleep(False, True, True, True))  

# 7
def should_go_to_party(friends_agree, no_work_next_day, nearby):
    return (friends_agree and no_work_next_day) or nearby

print(should_go_to_party(False, True, True))  

# 8
def should_stay_home(rainy, snowy, no_plans):
    return (rainy or snowy) and no_plans

print(should_stay_home(False, True, True))  

# 9
def should_go_for_run(dry_weather, sneakers, friend_ready):
    return (dry_weather and sneakers) or friend_ready

print(should_go_for_run(True, False, True)) 

# 10
def should_watch_football(day, free_time, favorite_team_playing):
    return ((day == 'Saturday' or day == 'Sunday') and free_time) or favorite_team_playing

print(should_watch_football('Sunday', False, True))  



