#!/usr/bin/perl
# Quick and dirty script for prepending frontmatter constants

opendir my $directory, "." or die ("Failed: $!\n");
my @files = readdir($directory);
foreach $currFile (@files) {
    if ($currFile =~ /^\.{1,2}$/) {
        next;
    }
    if ($currFile !~ /^.*\.md$/) {
        print(" -> $currFile doesn't have the .md extension. Skipping\n");
        next;
    }
    print("$currFile\n");
    open my $openFile, "<", $currFile or die("Failed to open $!\n");
    my @lines = <$openFile>; 
    close($openFile);
    # Proceeding with writing to file
    open $openFile, ">", $currFile or die("Failed to write to $!\n");
    
    # Frontmatter declaration:
    $currFile =~ /^(.*)\.md$/;
    my $title = $1;
    $title =~ s/-/ /g;
    $title =~ s/(?<! )([A-Z])/ $1/g; 
    $title =~ s/^ (?=[A-Z])//;
    unshift(@lines, "---\n");
    unshift(@lines, "title: $title\n");
    unshift(@lines, "---\n");

    print $openFile @lines;
    close($openFile);
}