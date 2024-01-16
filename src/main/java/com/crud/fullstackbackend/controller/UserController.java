package com.crud.fullstackbackend.controller;

import com.crud.fullstackbackend.exception.UserNotFoundException;
import com.crud.fullstackbackend.model.User;
import com.crud.fullstackbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser (@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable int id){
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser,@PathVariable int id){
        return userRepository.findById(id)
                .map(user->{
                    user.setName(newUser.getName());
                    user.setDescription(newUser.getDescription());
                    user.setAssigned_by(newUser.getAssigned_by());
                    user.setAssigned_for(newUser.getAssigned_for());
                    user.setAssign_date(newUser.getAssign_date());
                    user.setDeadline(newUser.getDeadline());
                    user.setStatus(newUser.getStatus());
                    return userRepository.save(user);
                }).orElseThrow(
                        ()->new UserNotFoundException(id)
                );
    }
    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable int id)
    {
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return  "User with id"+id+"has been deleted success";
    }

}
