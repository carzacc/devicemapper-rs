var searchIndex = {};
searchIndex['dmtest'] = {"items":[],"paths":[]};
searchIndex['devicemapper'] = {"items":[[0,"","devicemapper","Low-level devicemapper configuration of the running kernel.",null,null],[3,"DmFlags","","Flags used by devicemapper.",null,null],[3,"Device","","A struct containing the device's major and minor numbers",null,null],[12,"major","","Device major number",0,null],[12,"minor","","Device minor number",0,null],[3,"DeviceInfo","","Contains information about the device.",null,null],[3,"DM","","Context needed for communicating with devicemapper.",null,null],[4,"StatusType","","Used with `DM::table_status()` to choose either return of info or\ntables for a target. The contents of each of these strings is\ntarget-specific.",null,null],[13,"Info","","Return a target's `STATUSTYPE_INFO`.",1,null],[13,"Table","","Return a target's `STATUSTYPE_TABLE`.",1,null],[5,"dev_majors","","Major numbers used by DM.",null,{"inputs":[],"output":{"name":"btreeset"}}],[17,"DM_READONLY","","In: Device should be read-only.\nOut: Device is read-only.",null,null],[17,"DM_SUSPEND","","In: Device should be suspended.\nOut: Device is suspended.",null,null],[17,"DM_PERSISTENT_DEV","","In: Use passed-in minor number.",null,null],[17,"DM_STATUS_TABLE","","In: STATUS command returns table info instead of status.",null,null],[17,"DM_ACTIVE_PRESENT","","Out: Active table is present.",null,null],[17,"DM_INACTIVE_PRESENT","","Out: Inactive table is present.",null,null],[17,"DM_BUFFER_FULL","","Out: Passed-in buffer was too small.",null,null],[17,"DM_SKIP_BDGET","","Obsolete.",null,null],[17,"DM_SKIP_LOCKFS","","In: Avoid freezing filesystem when suspending.",null,null],[17,"DM_NOFLUSH","","In: Suspend without flushing queued I/Os.",null,null],[17,"DM_QUERY_INACTIVE_TABLE","","In: Query inactive table instead of active.",null,null],[17,"DM_UEVENT_GENERATED","","Out: A uevent was generated, the caller may need to wait for it.",null,null],[17,"DM_UUID","","In: Rename affects UUID field, not name field.",null,null],[17,"DM_SECURE_DATA","","In: All buffers are wiped after use. Use when handling crypto keys.",null,null],[17,"DM_DATA_OUT","","Out: A message generated output data.",null,null],[17,"DM_DEFERRED_REMOVE","","In: Do not remove in-use devices.\nOut: Device scheduled to be removed when closed.",null,null],[17,"DM_INTERNAL_SUSPEND","","Out: Device is suspended internally.",null,null],[11,"hash","","",2,null],[11,"cmp","","",2,{"inputs":[{"name":"dmflags"},{"name":"dmflags"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",2,{"inputs":[{"name":"dmflags"},{"name":"dmflags"}],"output":{"name":"option"}}],[11,"lt","","",2,{"inputs":[{"name":"dmflags"},{"name":"dmflags"}],"output":{"name":"bool"}}],[11,"le","","",2,{"inputs":[{"name":"dmflags"},{"name":"dmflags"}],"output":{"name":"bool"}}],[11,"gt","","",2,{"inputs":[{"name":"dmflags"},{"name":"dmflags"}],"output":{"name":"bool"}}],[11,"ge","","",2,{"inputs":[{"name":"dmflags"},{"name":"dmflags"}],"output":{"name":"bool"}}],[11,"clone","","",2,{"inputs":[{"name":"dmflags"}],"output":{"name":"dmflags"}}],[11,"eq","","",2,{"inputs":[{"name":"dmflags"},{"name":"dmflags"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"dmflags"},{"name":"dmflags"}],"output":{"name":"bool"}}],[11,"fmt","","",2,{"inputs":[{"name":"dmflags"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"empty","","Returns an empty set of flags.",2,{"inputs":[{"name":"dmflags"}],"output":{"name":"dmflags"}}],[11,"all","","Returns the set containing all flags.",2,{"inputs":[{"name":"dmflags"}],"output":{"name":"dmflags"}}],[11,"bits","","Returns the raw value of the flags currently stored.",2,{"inputs":[{"name":"dmflags"}],"output":{"name":"__u32"}}],[11,"from_bits","","Convert from underlying bit representation, unless that\nrepresentation contains bits that do not correspond to a flag.",2,{"inputs":[{"name":"dmflags"},{"name":"__u32"}],"output":{"name":"option"}}],[11,"from_bits_truncate","","Convert from underlying bit representation, dropping any bits\nthat do not correspond to flags.",2,{"inputs":[{"name":"dmflags"},{"name":"__u32"}],"output":{"name":"dmflags"}}],[11,"is_empty","","Returns `true` if no flags are currently stored.",2,{"inputs":[{"name":"dmflags"}],"output":{"name":"bool"}}],[11,"is_all","","Returns `true` if all flags are currently set.",2,{"inputs":[{"name":"dmflags"}],"output":{"name":"bool"}}],[11,"intersects","","Returns `true` if there are flags common to both `self` and `other`.",2,{"inputs":[{"name":"dmflags"},{"name":"dmflags"}],"output":{"name":"bool"}}],[11,"contains","","Returns `true` all of the flags in `other` are contained within `self`.",2,{"inputs":[{"name":"dmflags"},{"name":"dmflags"}],"output":{"name":"bool"}}],[11,"insert","","Inserts the specified flags in-place.",2,{"inputs":[{"name":"dmflags"},{"name":"dmflags"}],"output":null}],[11,"remove","","Removes the specified flags in-place.",2,{"inputs":[{"name":"dmflags"},{"name":"dmflags"}],"output":null}],[11,"toggle","","Toggles the specified flags in-place.",2,{"inputs":[{"name":"dmflags"},{"name":"dmflags"}],"output":null}],[11,"bitor","","Returns the union of the two sets of flags.",2,{"inputs":[{"name":"dmflags"},{"name":"dmflags"}],"output":{"name":"dmflags"}}],[11,"bitxor","","Returns the left flags, but with all the right flags toggled.",2,{"inputs":[{"name":"dmflags"},{"name":"dmflags"}],"output":{"name":"dmflags"}}],[11,"bitand","","Returns the intersection between the two sets of flags.",2,{"inputs":[{"name":"dmflags"},{"name":"dmflags"}],"output":{"name":"dmflags"}}],[11,"sub","","Returns the set difference of the two sets of flags.",2,{"inputs":[{"name":"dmflags"},{"name":"dmflags"}],"output":{"name":"dmflags"}}],[11,"not","","Returns the complement of this set of flags.",2,{"inputs":[{"name":"dmflags"}],"output":{"name":"dmflags"}}],[11,"from_iter","","",2,{"inputs":[{"name":"dmflags"},{"name":"t"}],"output":{"name":"dmflags"}}],[11,"clone","","",1,{"inputs":[{"name":"statustype"}],"output":{"name":"statustype"}}],[11,"fmt","","",1,{"inputs":[{"name":"statustype"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"device"}],"output":{"name":"device"}}],[11,"cmp","","",0,{"inputs":[{"name":"device"},{"name":"device"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"device"},{"name":"device"}],"output":{"name":"option"}}],[11,"lt","","",0,{"inputs":[{"name":"device"},{"name":"device"}],"output":{"name":"bool"}}],[11,"le","","",0,{"inputs":[{"name":"device"},{"name":"device"}],"output":{"name":"bool"}}],[11,"gt","","",0,{"inputs":[{"name":"device"},{"name":"device"}],"output":{"name":"bool"}}],[11,"ge","","",0,{"inputs":[{"name":"device"},{"name":"device"}],"output":{"name":"bool"}}],[11,"eq","","",0,{"inputs":[{"name":"device"},{"name":"device"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"device"},{"name":"device"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"device"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"path","","Returns the path in `/dev` that corresponds with the device number.",0,{"inputs":[{"name":"device"}],"output":{"name":"option"}}],[11,"from_str","","",0,{"inputs":[{"name":"device"},{"name":"str"}],"output":{"name":"result"}}],[11,"from","","",0,{"inputs":[{"name":"device"},{"name":"u64"}],"output":{"name":"device"}}],[11,"clone","","",3,{"inputs":[{"name":"deviceinfo"}],"output":{"name":"deviceinfo"}}],[11,"version","","The major, minor, and patchlevel versions of devicemapper.",3,null],[11,"open_count","","The number of times the device is currently open.",3,{"inputs":[{"name":"deviceinfo"}],"output":{"name":"i32"}}],[11,"event_nr","","The last event number for the device.",3,{"inputs":[{"name":"deviceinfo"}],"output":{"name":"u32"}}],[11,"device","","The device's major and minor device numbers, as a Device.",3,{"inputs":[{"name":"deviceinfo"}],"output":{"name":"device"}}],[11,"name","","The device's name.",3,{"inputs":[{"name":"deviceinfo"}],"output":{"name":"str"}}],[11,"uuid","","The device's UUID.",3,{"inputs":[{"name":"deviceinfo"}],"output":{"name":"str"}}],[11,"flags","","The flags returned from the device.",3,{"inputs":[{"name":"deviceinfo"}],"output":{"name":"dmflags"}}],[11,"new","","Create a new context for communicating with DM.",4,{"inputs":[{"name":"dm"}],"output":{"name":"result"}}],[11,"version","","Devicemapper version information: Major, Minor, and patchlevel versions.",4,{"inputs":[{"name":"dm"}],"output":{"name":"result"}}],[11,"remove_all","","Remove all DM devices and tables. Use discouraged other than\nfor debugging.",4,{"inputs":[{"name":"dm"},{"name":"dmflags"}],"output":{"name":"result"}}],[11,"list_devices","","Returns a list of tuples containing DM device names and a\nDevice, which holds their major and minor device numbers.",4,{"inputs":[{"name":"dm"}],"output":{"name":"result"}}],[11,"device_create","","Create a DM device. It starts out in a \"suspended\" state.",4,{"inputs":[{"name":"dm"},{"name":"str"},{"name":"option"},{"name":"dmflags"}],"output":{"name":"result"}}],[11,"device_remove","","Remove a DM device and its mapping tables.",4,{"inputs":[{"name":"dm"},{"name":"str"},{"name":"dmflags"}],"output":{"name":"result"}}],[11,"device_rename","","Change a DM device's name.",4,{"inputs":[{"name":"dm"},{"name":"str"},{"name":"str"},{"name":"dmflags"}],"output":{"name":"result"}}],[11,"device_suspend","","Suspend or resume a DM device, depending on if DM_SUSPEND flag\nis set or not.",4,{"inputs":[{"name":"dm"},{"name":"str"},{"name":"dmflags"}],"output":{"name":"result"}}],[11,"device_status","","Get DeviceInfo for a device. This is also returned by other\nmethods, but if just the DeviceInfo is desired then this just\ngets it.",4,{"inputs":[{"name":"dm"},{"name":"str"}],"output":{"name":"result"}}],[11,"device_wait","","Wait for a device to report an event.",4,{"inputs":[{"name":"dm"},{"name":"str"},{"name":"dmflags"}],"output":{"name":"result"}}],[11,"table_load","","Load targets for a device into its inactive table slot.",4,{"inputs":[{"name":"dm"},{"name":"str"},{"name":"vec"}],"output":{"name":"result"}}],[11,"table_clear","","Clear the \"inactive\" table for a device.",4,{"inputs":[{"name":"dm"},{"name":"str"}],"output":{"name":"result"}}],[11,"table_deps","","Query DM for which devices are referenced by the \"active\"\ntable for this device.",4,{"inputs":[{"name":"dm"},{"name":"device"},{"name":"dmflags"}],"output":{"name":"result"}}],[11,"table_status","","Return the status of all targets for a device's \"active\"\ntable.",4,{"inputs":[{"name":"dm"},{"name":"str"},{"name":"dmflags"}],"output":{"name":"result"}}],[11,"list_versions","","Returns a list of each loaded target type with its name, and\nversion broken into major, minor, and patchlevel.",4,{"inputs":[{"name":"dm"}],"output":{"name":"result"}}],[11,"target_msg","","Send a message to the target at a given sector. If sector is\nnot needed use 0.  DM-wide messages start with '@', and may\nreturn a string; targets do not.",4,{"inputs":[{"name":"dm"},{"name":"str"},{"name":"u64"},{"name":"str"}],"output":{"name":"result"}}],[11,"device_set_geometry","","Unimplemented.",4,{"inputs":[{"name":"dm"},{"name":"dmflags"}],"output":null}],[11,"depends_on","","Recursively walk DM deps to see if `dev` might be its own dependency.",4,{"inputs":[{"name":"dm"},{"name":"device"},{"name":"btreeset"}],"output":{"name":"bool"}}]],"paths":[[3,"Device"],[4,"StatusType"],[3,"DmFlags"],[3,"DeviceInfo"],[3,"DM"]]};
initSearch(searchIndex);
