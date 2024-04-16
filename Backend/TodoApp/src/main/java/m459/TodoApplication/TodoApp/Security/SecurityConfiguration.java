package m459.TodoApplication.TodoApp.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
@Configuration
public class SecurityConfiguration {
/*
    @Bean
    SecurityFilterChain authenticatedAndFreePagesWithLogin(HttpSecurity http) throws Exception {
        return http.cors().and().authorizeRequests()
                //.requestMatchers("/private").hasRole("ADMIN") // Authentifiziert den Pfad "/private" für Benutzer mit der Rolle ADMIN
                //.requestMatchers("/public").authenticated() // Authentifiziert den Pfad "/public"
                .requestMatchers("/api/auth/signup").permitAll()
                .anyRequest().permitAll() // Ermöglicht den Zugriff auf alle anderen Pfade für alle Benutzer
                .and().formLogin() // Aktiviert das Formular-Login
                .and().build(); // Beendet die Konfiguration und erstellt die SecurityFilterChain
    }
/* 
    @Bean
    public UserDetailsService users(@Autowired PasswordEncoder pwEnc) {
        UserDetails user = User.builder()
                .username("user")
                .password(pwEnc.encode("top")) // Das Passwort wird vor dem Speichern verschlüsselt
                .roles("USER")
                .build();

        // Definiert einen Administrator mit Benutzer- und Adminrollen
        UserDetails admin = User.builder()
                .username("admin")
                .password(pwEnc.encode("secret")) // Das Passwort wird vor dem Speichern verschlüsselt
                .roles("USER", "ADMIN")
                .build();

        // Gibt eine InMemoryUserDetailsManager-Instanz zurück, die die konfigurierten
        // Benutzerdetails verwaltet
        return new InMemoryUserDetailsManager(user, admin);
    }
    */
    // Definiert einen PasswordEncoder, der zum Verschlüsseln von Passwörtern
    // verwendet wird
    /*
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // Verwendet den BCrypt-Algorithmus für das Hashing
    }
     */
    
}