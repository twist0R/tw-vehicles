function GetPlayers()
  local players = {}

  for i = 0, 255 do
      if NetworkIsPlayerActive(i) then
          players[#players+1]= i
      end
  end

  return players
end

function GetClosestPlayer()
  local players = GetPlayers()
  local closestDistance = -1
  local closestPlayer = -1
  local ply = PlayerPedId()
  local plyCoords = GetEntityCoords(ply, 0)
  
  for index,value in ipairs(players) do
      local target = GetPlayerPed(value)
      if(target ~= ply) then
          local targetCoords = GetEntityCoords(GetPlayerPed(value), 0)
          local distance = #(vector3(targetCoords["x"], targetCoords["y"], targetCoords["z"]) - vector3(plyCoords["x"], plyCoords["y"], plyCoords["z"]))
          if(closestDistance == -1 or closestDistance > distance) then
              closestPlayer = value
              closestDistance = distance
          end
      end
  end
  
  return closestPlayer, closestDistance
end

RegisterCommand("transfer", function(source, args)
    TriggerEvent("transfer:attempt")
end)

RegisterNetEvent("transfer:attempt")
AddEventHandler("transfer:attempt", function()
    local coords = GetEntityCoords(PlayerPedId())
    if IsAnyVehicleNearPoint(coords.x, coords.y, coords.z, 5.0) then
        vehicle = GetClosestVehicle(coords.x, coords.y, coords.z, 5.0, 0, 71)
        if DoesEntityExist(vehicle) then
            t, distance = GetClosestPlayer()
	        if(distance ~= -1 and distance < 2) then
                local plate = GetVehicleNumberPlateText(vehicle)
                TriggerServerEvent("transfer:attempt:send", plate, GetPlayerServerId(t))
            else
                TriggerEvent("DoLongHudText", "You are not near anyone to transfer the vehicle too", 2)
            end
        end
    end
end)

exports('GetClosestPlayer', GetClosestPlayer)